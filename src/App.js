import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const spaceQuestionsDB = {
  'stars-constellations': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'solar-system': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'moons-satellites': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'black-holes-neutron': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'comets-asteroids': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'exoplanets': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'the-sun': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'galaxies': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'mars-rovers': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'space-telescopes': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'lunar-landers': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'space-probes': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'rockets-launch': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'spacesuits-life': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'robotics-space': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'satellites-orbits': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'famous-astronauts': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'space-stations': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'historic-missions': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'commercial-companies': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'space-tourism': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'spaceports-launch': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'space-debris': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'asteroid-impact': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'radiation-hazards': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'movies-tv': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
  'books-comics': {
    easy: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    medium: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
    hard: [{ q: 'Questions coming soon', a: 'Upload your questions' }],
  },
};

const majorCategories = {
  'space-science': {
    name: 'Space Science',
    subcategories: [
      { id: 'stars-constellations', name: 'Stars & Constellations' },
      { id: 'solar-system', name: 'Our Solar System' },
      { id: 'moons-satellites', name: 'Moons & Natural Satellites' },
      { id: 'black-holes-neutron', name: 'Black Holes & Neutron Stars' },
      { id: 'comets-asteroids', name: 'Comets & Asteroids' },
      { id: 'exoplanets', name: 'Exoplanets' },
      { id: 'the-sun', name: 'The Sun' },
      { id: 'galaxies', name: 'Galaxies' },
    ]
  },
  'space-exploration': {
    name: 'Space Exploration',
    subcategories: [
      { id: 'mars-rovers', name: 'Mars Rovers & Missions' },
      { id: 'space-telescopes', name: 'Space Telescopes' },
      { id: 'lunar-landers', name: 'Lunar & Planetary Landers' },
      { id: 'space-probes', name: 'Space Probes' },
    ]
  },
  'space-technology': {
    name: 'Space Technology',
    subcategories: [
      { id: 'rockets-launch', name: 'Rockets & Launch Vehicles' },
      { id: 'spacesuits-life', name: 'Space Suits & Life Support' },
      { id: 'robotics-space', name: 'Robotics in Space' },
      { id: 'satellites-orbits', name: 'Satellites & Orbits' },
    ]
  },
  'human-spaceflight': {
    name: 'Human Spaceflight & Astronauts',
    subcategories: [
      { id: 'famous-astronauts', name: 'Famous Astronauts & Cosmonauts' },
      { id: 'space-stations', name: 'Space Stations & Habitats' },
      { id: 'historic-missions', name: 'Historic Space Missions' },
    ]
  },
  'space-industry': {
    name: 'Space Industry & Economy',
    subcategories: [
      { id: 'commercial-companies', name: 'Commercial Spaceflight Companies' },
      { id: 'space-tourism', name: 'Space Tourism' },
      { id: 'spaceports-launch', name: 'Spaceports & Launch Sites' },
    ]
  },
  'space-environment': {
    name: 'Space Environment & Safety',
    subcategories: [
      { id: 'space-debris', name: 'Space Debris & Collisions' },
      { id: 'asteroid-impact', name: 'Asteroid Impact Risks' },
      { id: 'radiation-hazards', name: 'Radiation & Cosmic Hazards' },
    ]
  },
  'scifi-pop-culture': {
    name: 'Science Fiction & Space in Pop Culture',
    subcategories: [
      { id: 'movies-tv', name: 'Movies & TV Shows' },
      { id: 'books-comics', name: 'Books & Comics' },
    ]
  },
};

const gameRules = {
  'head-to-head': { title: '⚔️ Head-to-Head', rules: ['Compete vs another player', 'Correct: +2 pts', 'First to target score wins', 'Online or offline'] },
  'speed-round': { title: '⚡ Speed Round', rules: ['Answer as fast as possible', 'Timer for each question', 'Correct: +2 pts', 'Fastest wins'] },
  'team-mode': { title: '👥 Team Mode', rules: ['Compete as a team', 'Scores accumulate', 'Members play independently', 'Highest team score wins'] },
  'custom': { title: '🎮 Custom Mode', rules: ['Create your own rules', 'Select any category', 'Customize difficulty', 'Perfect for practice'] },
};

const avatarOptions = ['🧑‍🚀', '👨‍🚀', '🪐', '⭐', '🌕', '🚀', '🛸', '☄️', '🌌', '👽', '🔭', '⚫'];

const generateMultipleChoice = (correctAnswer, subcategory, difficulty) => {
  const answers = [correctAnswer];
  const allSubcategories = Object.values(majorCategories).flatMap(cat => cat.subcategories.map(sub => sub.id));
  while (answers.length < 4) {
    const randomSubcat = allSubcategories[Math.floor(Math.random() * allSubcategories.length)];
    const questions = spaceQuestionsDB[randomSubcat]?.[difficulty];
    if (questions && questions.length > 0) {
      const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
      if (!answers.includes(randomQuestion.a)) answers.push(randomQuestion.a);
    }
  }
  return answers.sort(() => Math.random() - 0.5);
};

export default function SpaceTrivia() {
  const [screen, setScreen] = useState('auth');
  const [authMode, setAuthMode] = useState('login');
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [teamName, setTeamName] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
  const [selectedTimer, setSelectedTimer] = useState(30);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [multipleChoiceOptions, setMultipleChoiceOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [showMoreSubcats, setShowMoreSubcats] = useState({});
  const [teamVisibility, setTeamVisibility] = useState('public');
  const [playerVisibility, setPlayerVisibility] = useState('public');
  const [selectedGameMode, setSelectedGameMode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showGameSetup, setShowGameSetup] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [expandedTeam, setExpandedTeam] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const savedUsers = localStorage.getItem('spaceTrivia_users');
    const savedTeams = localStorage.getItem('spaceTrivia_teams');
    if (savedUsers) setUsers(JSON.parse(savedUsers));
    if (savedTeams) setTeams(JSON.parse(savedTeams));
  }, []);

  useEffect(() => { localStorage.setItem('spaceTrivia_users', JSON.stringify(users)); }, [users]);
  useEffect(() => { localStorage.setItem('spaceTrivia_teams', JSON.stringify(teams)); }, [teams]);

  useEffect(() => {
    if (isPlaying && timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isPlaying, showResult]);

  const handleSignup = () => {
    if (!username || !password) return alert('Enter username and password');
    if (users.find(u => u.username === username)) return alert('Username already exists');
    const newUser = { id: Date.now(), username, password, avatar: avatarOptions[0], totalScore: 0, teamIds: [], isPublic: playerVisibility === 'public', gamesPlayed: 0 };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    setUsername(''); setPassword(''); setPlayerVisibility('public');
    setScreen('avatar-select');
  };

  const handleLogin = () => {
    if (!username || !password) return alert('Enter username and password');
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return alert('Invalid username or password');
    setCurrentUser(user); 
    setGamesPlayed(user.gamesPlayed || 0); 
    setUsername(''); 
    setPassword(''); 
    setScreen('home');
  };

  const selectAvatar = (avatar) => {
    const updated = { ...currentUser, avatar };
    setCurrentUser(updated);
    setUsers(users.map(u => u.id === currentUser.id ? updated : u));
    setScreen('home');
  };

  const createTeam = () => {
    if (!teamName) return alert('Enter team name');
    const newTeam = { id: Date.now(), name: teamName, admins: [currentUser.id], members: [currentUser.id], totalScore: 0, isPublic: teamVisibility === 'public', joinRequests: [] };
    setTeams([...teams, newTeam]);
    setCurrentUser({ ...currentUser, teamIds: [...currentUser.teamIds, newTeam.id] });
    setUsers(users.map(u => u.id === currentUser.id ? { ...currentUser, teamIds: [...currentUser.teamIds, newTeam.id] } : u));
    setTeamName(''); setTeamVisibility('public');
  };

  const leaveTeam = (teamId) => {
    setCurrentUser({ ...currentUser, teamIds: currentUser.teamIds.filter(id => id !== teamId) });
    setUsers(users.map(u => u.id === currentUser.id ? { ...currentUser, teamIds: currentUser.teamIds.filter(id => id !== teamId) } : u));
  };

  const requestJoinTeam = (teamId) => {
    const team = teams.find(t => t.id === teamId);
    if (team.members.includes(currentUser.id)) return alert('Already in team');
    if (team.joinRequests.includes(currentUser.id)) return alert('Request already pending');
    
    const updatedTeam = { ...team, joinRequests: [...team.joinRequests, currentUser.id] };
    setTeams(teams.map(t => t.id === teamId ? updatedTeam : t));
    alert('Request sent to team admins!');
  };

  const approveJoinRequest = (teamId, userId) => {
    const team = teams.find(t => t.id === teamId);
    const updatedTeam = {
      ...team,
      members: [...team.members, userId],
      joinRequests: team.joinRequests.filter(id => id !== userId)
    };
    setTeams(teams.map(t => t.id === teamId ? updatedTeam : t));
    const user = users.find(u => u.id === userId);
    setUsers(users.map(u => u.id === userId ? { ...user, teamIds: [...user.teamIds, teamId] } : u));
  };

  const rejectJoinRequest = (teamId, userId) => {
    const team = teams.find(t => t.id === teamId);
    const updatedTeam = {
      ...team,
      joinRequests: team.joinRequests.filter(id => id !== userId)
    };
    setTeams(teams.map(t => t.id === teamId ? updatedTeam : t));
  };

  const removeMember = (teamId, userId) => {
    const team = teams.find(t => t.id === teamId);
    const updatedTeam = {
      ...team,
      members: team.members.filter(m => m !== userId),
      admins: team.admins.filter(a => a !== userId)
    };
    if (updatedTeam.members.length > 0 && updatedTeam.admins.length === 0) {
      updatedTeam.admins = [updatedTeam.members[0]];
    }
    setTeams(teams.map(t => t.id === teamId ? updatedTeam : t));
  };

  const setupGame = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setShowGameSetup(true);
  };

  const startGame = () => {
    if (!selectedSubcategory) return alert('Select a category');
    const questions = spaceQuestionsDB[selectedSubcategory][selectedDifficulty];
    if (!questions || questions.length === 0) return alert('No questions available');
    const q = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(q);
    setMultipleChoiceOptions(generateMultipleChoice(q.a, selectedSubcategory, selectedDifficulty));
    setSelectedAnswer(null); setShowResult(false); setTimeLeft(selectedTimer); setRoundScore(0); setQuestionNumber(1);
    setIsPlaying(true);
    setShowGameSetup(false);
  };

  const toggleCategory = (key) => { setExpandedCategories({ ...expandedCategories, [key]: !expandedCategories[key] }); };
  const toggleShowMore = (key) => { setShowMoreSubcats({ ...showMoreSubcats, [key]: !showMoreSubcats[key] }); };
  
  const getDisplayedSubcats = (key) => {
    const subcats = majorCategories[key].subcategories;
    return showMoreSubcats[key] ? subcats : subcats.slice(0, 3);
  };

  const getTotalQuestions = () => {
    return selectedSubcategory && spaceQuestionsDB[selectedSubcategory] ? spaceQuestionsDB[selectedSubcategory][selectedDifficulty].length : 10;
  };

  const handleAnswer = (opt) => {
    setSelectedAnswer(opt);
    const isCorrect = opt === currentQuestion.a;
    setRoundScore(isCorrect ? 2 : 0);
    setShowResult(true);
    const updated = { ...currentUser, totalScore: currentUser.totalScore + (isCorrect ? 2 : 0) };
    setCurrentUser(updated);
    setUsers(users.map(u => u.id === currentUser.id ? updated : u));
  };

  const nextQuestion = () => {
    const questions = spaceQuestionsDB[selectedSubcategory][selectedDifficulty];
    const q = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(q);
    setMultipleChoiceOptions(generateMultipleChoice(q.a, selectedSubcategory, selectedDifficulty));
    setSelectedAnswer(null); setShowResult(false); setTimeLeft(selectedTimer); setRoundScore(0); setQuestionNumber(questionNumber + 1);
  };

  const returnToModes = () => {
    setIsPlaying(false); setSelectedGameMode(null); setCurrentQuestion(null);
    const updated = { ...currentUser, gamesPlayed: gamesPlayed + 1 };
    setCurrentUser(updated);
    setUsers(users.map(u => u.id === currentUser.id ? updated : u));
    setGamesPlayed(gamesPlayed + 1);
  };

  const logout = () => { setCurrentUser(null); setScreen('auth'); setAuthMode('login'); };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      {/* AUTH */}
      {screen === 'auth' && (
        <div style={{ maxWidth: '500px', margin: '60px auto', background: 'rgba(30, 58, 138, 0.8)', padding: '40px', borderRadius: '12px', border: '2px solid rgba(59, 130, 246, 0.5)' }}>
          <h1 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '30px' }}>SPACE TRIVIA</h1>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <button onClick={() => setAuthMode('login')} style={{ flex: 1, padding: '12px', background: authMode === 'login' ? '#2563eb' : 'rgba(15, 23, 42, 0.8)', border: '2px solid rgba(59, 130, 246, 0.5)', borderRadius: '6px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>Log In</button>
            <button onClick={() => setAuthMode('signup')} style={{ flex: 1, padding: '12px', background: authMode === 'signup' ? '#16a34a' : 'rgba(15, 23, 42, 0.8)', border: '2px solid rgba(59, 130, 246, 0.5)', borderRadius: '6px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>Create</button>
          </div>
          {authMode === 'login' && (
            <>
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', padding: '12px', marginBottom: '15px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(59, 130, 246, 0.5)', borderRadius: '6px', color: 'white', boxSizing: 'border-box' }} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '12px', marginBottom: '20px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(59, 130, 246, 0.5)', borderRadius: '6px', color: 'white', boxSizing: 'border-box' }} />
              <button onClick={handleLogin} style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #2563eb, #0891b2)', border: 'none', borderRadius: '6px', color: 'white', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>Log In</button>
            </>
          )}
          {authMode === 'signup' && (
            <>
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', padding: '12px', marginBottom: '15px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(59, 130, 246, 0.5)', borderRadius: '6px', color: 'white', boxSizing: 'border-box' }} />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '12px', marginBottom: '15px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(59, 130, 246, 0.5)', borderRadius: '6px', color: 'white', boxSizing: 'border-box' }} />
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <button onClick={() => setPlayerVisibility('public')} style={{ flex: 1, padding: '10px', background: playerVisibility === 'public' ? '#2563eb' : 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(59, 130, 246, 0.5)', borderRadius: '4px', color: 'white', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>Public</button>
                <button onClick={() => setPlayerVisibility('private')} style={{ flex: 1, padding: '10px', background: playerVisibility === 'private' ? '#ef4444' : 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(59, 130, 246, 0.5)', borderRadius: '4px', color: 'white', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>Private</button>
              </div>
              <button onClick={handleSignup} style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #16a34a, #15803d)', border: 'none', borderRadius: '6px', color: 'white', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>Create</button>
            </>
          )}
        </div>
      )}

      {screen === 'avatar-select' && currentUser && (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Choose Avatar</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {avatarOptions.map((avatar) => (
              <button key={avatar} onClick={() => selectAvatar(avatar)} style={{ padding: '30px', background: 'rgba(30, 58, 138, 0.6)', border: '2px solid rgba(59, 130, 246, 0.5)', borderRadius: '12px', cursor: 'pointer', fontSize: '48px', transform: currentUser.avatar === avatar ? 'scale(1.2)' : 'scale(1)' }}>
                {avatar}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* GAME SETUP */}
      {showGameSetup && (
        <div style={{ maxWidth: '600px', margin: '60px auto', background: 'rgba(30, 58, 138, 0.8)', padding: '40px', borderRadius: '12px', border: '2px solid rgba(59, 130, 246, 0.5)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Game Setup</h2>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Category: {selectedSubcategory?.toUpperCase()}</label>
            
            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', marginTop: '20px' }}>Difficulty:</label>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              {['easy', 'medium', 'hard'].map((diff) => (
                <button key={diff} onClick={() => setSelectedDifficulty(diff)} style={{ flex: 1, padding: '10px', background: selectedDifficulty === diff ? '#2563eb' : 'rgba(15, 23, 42, 0.8)', border: `2px solid ${selectedDifficulty === diff ? '#2563eb' : 'rgba(59, 130, 246, 0.5)'}`, borderRadius: '6px', color: 'white', cursor: 'pointer', fontWeight: 'bold', textTransform: 'capitalize' }}>
                  {diff}
                </button>
              ))}
            </div>

            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Time per Question:</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '20px' }}>
              {[30, 60, 120, 300].map((time) => (
                <button key={time} onClick={() => setSelectedTimer(time)} style={{ padding: '10px', background: selectedTimer === time ? '#2563eb' : 'rgba(15, 23, 42, 0.8)', border: `2px solid ${selectedTimer === time ? '#2563eb' : 'rgba(59, 130, 246, 0.5)'}`, borderRadius: '6px', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>
                  {time}s
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => setShowGameSetup(false)} style={{ flex: 1, padding: '12px', background: 'rgba(30, 58, 138, 0.6)', border: '2px solid rgba(59, 130, 246, 0.5)', borderRadius: '6px', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>Back</button>
            <button onClick={startGame} style={{ flex: 1, padding: '12px', background: 'linear-gradient(135deg, #2563eb, #0891b2)', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>Start Game</button>
          </div>
        </div>
      )}

      {/* DESKTOP LAYOUT */}
      {!isMobile && screen === 'home' && currentUser && !isPlaying && !showGameSetup && (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          {/* LEFT */}
          <div style={{ width: '360px', background: 'rgba(30, 58, 138, 0.4)', padding: '20px', borderRight: '1px solid rgba(59, 130, 246, 0.3)', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'rgba(30, 58, 138, 0.6)', padding: '15px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>{currentUser.avatar}</div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>{currentUser.username}</h4>
              <p style={{ margin: '8px 0 5px 0', fontSize: '12px', color: '#93c5fd' }}>Score: {currentUser.totalScore}</p>
              <p style={{ margin: '0', fontSize: '12px', color: '#93c5fd' }}>Games: {gamesPlayed}</p>
            </div>

            <h3 style={{ marginBottom: '12px', fontSize: '14px', borderBottom: '2px solid rgba(59, 130, 246, 0.5)', paddingBottom: '8px' }}>👥 My Teams</h3>
            <div style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '15px' }}>
              {currentUser.teamIds.length === 0 ? (
                <p style={{ color: '#93c5fd', fontSize: '11px', margin: '0' }}>No teams</p>
              ) : (
                currentUser.teamIds.map(teamId => {
                  const team = teams.find(t => t.id === teamId);
                  const isAdmin = team && team.admins.includes(currentUser.id);
                  return team ? (
                    <div key={teamId} style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '8px', marginBottom: '6px', borderRadius: '6px', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                      <button onClick={() => setExpandedTeam(expandedTeam === teamId ? null : teamId)} style={{ width: '100%', background: 'none', border: 'none', color: 'white', cursor: 'pointer', textAlign: 'left', padding: '0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <h4 style={{ margin: '0 0 4px 0', fontSize: '12px' }}>{team.name}</h4>
                            <p style={{ margin: '0', color: '#93c5fd', fontSize: '10px' }}>Score: {team.totalScore} | {team.members.length} members {isAdmin ? '(Admin)' : ''}</p>
                          </div>
                          <span style={{ color: '#93c5fd', fontSize: '12px' }}>{expandedTeam === teamId ? 'v' : '>'}</span>
                        </div>
                      </button>

                      {expandedTeam === teamId && (
                        <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid rgba(59, 130, 246, 0.2)' }}>
                          {/* ADD MEMBERS FOR ADMINS */}
                          {isAdmin && (
                            <div style={{ marginBottom: '8px', padding: '6px', background: 'rgba(37, 99, 235, 0.2)', borderRadius: '4px' }}>
                              <p style={{ margin: '0 0 4px 0', fontSize: '9px', fontWeight: 'bold', color: '#4ade80' }}>Add Members</p>
                              {users.filter(u => u.isPublic && u.id !== currentUser.id && !team.members.includes(u.id)).length === 0 ? (
                                <p style={{ margin: '0', fontSize: '8px', color: '#93c5fd' }}>No users to add</p>
                              ) : (
                                users.filter(u => u.isPublic && u.id !== currentUser.id && !team.members.includes(u.id)).map(user => (
                                  <div key={user.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3px', marginBottom: '2px', background: 'rgba(15, 23, 42, 0.4)', borderRadius: '3px' }}>
                                    <span style={{ fontSize: '8px', color: '#93c5fd' }}>{user.avatar} {user.username}</span>
                                    <button onClick={() => inviteUserToTeam(teamId, user.id)} style={{ padding: '1px 4px', background: '#2563eb', border: 'none', borderRadius: '2px', color: 'white', cursor: 'pointer', fontSize: '7px' }}>Add</button>
                                  </div>
                                ))
                              )}
                            </div>
                          )}
                          
                          {/* PENDING REQUESTS */}
                      {isAdmin && team.joinRequests.length > 0 && (
                        <div style={{ marginTop: '4px', paddingTop: '4px', borderTop: '1px solid rgba(59, 130, 246, 0.2)' }}>
                          <p style={{ margin: '0 0 3px 0', fontSize: '9px', fontWeight: 'bold', color: '#fbbf24' }}>Requests: {team.joinRequests.length}</p>
                          {team.joinRequests.map(userId => {
                            const user = users.find(u => u.id === userId);
                            return (
                              <div key={userId} style={{ display: 'flex', gap: '3px', marginBottom: '3px', fontSize: '9px' }}>
                                <button onClick={() => approveJoinRequest(teamId, userId)} style={{ flex: 1, padding: '2px', background: '#16a34a', border: 'none', borderRadius: '2px', color: 'white', cursor: 'pointer', fontSize: '8px' }}>✓</button>
                                <button onClick={() => rejectJoinRequest(teamId, userId)} style={{ flex: 1, padding: '2px', background: '#ef4444', border: 'none', borderRadius: '2px', color: 'white', cursor: 'pointer', fontSize: '8px' }}>✗</button>
                                <span style={{ flex: 2, color: '#93c5fd' }}>{user?.username}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* MEMBERS LIST */}
                      {team.members.length > 0 && (
                        <div style={{ marginTop: '4px', paddingTop: '4px', borderTop: '1px solid rgba(59, 130, 246, 0.2)' }}>
                          <p style={{ margin: '0 0 3px 0', fontSize: '9px', fontWeight: 'bold', color: '#93c5fd' }}>Members</p>
                          {team.members.map(memberId => {
                            const member = users.find(u => u.id === memberId);
                            const isMemberAdmin = team.admins.includes(memberId);
                            return (
                              <div key={memberId} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px', fontSize: '9px', color: '#93c5fd', marginBottom: '2px' }}>
                                <span>{member?.avatar} {member?.username} {isMemberAdmin ? '(Admin)' : ''}</span>
                                {isAdmin && memberId !== currentUser.id && (
                                  <button onClick={() => removeMember(teamId, memberId)} style={{ padding: '0 3px', background: '#ef4444', border: 'none', borderRadius: '2px', color: 'white', cursor: 'pointer', fontSize: '7px' }}>✕</button>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}

                      <button onClick={() => leaveTeam(teamId)} style={{ width: '100%', marginTop: '4px', padding: '3px', background: '#ef4444', border: 'none', borderRadius: '3px', color: 'white', cursor: 'pointer', fontSize: '9px', fontWeight: 'bold' }}>Leave</button>
                    </div>
                  ) : null;
                })
              )}
            </div>

            <div style={{ flex: 1 }}></div>

            <h3 style={{ marginBottom: '10px', fontSize: '14px', borderBottom: '2px solid rgba(59, 130, 246, 0.5)', paddingBottom: '6px' }}>➕ Create</h3>
            <input type="text" placeholder="Team name" value={teamName} onChange={(e) => setTeamName(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '8px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(59, 130, 246, 0.5)', borderRadius: '4px', color: 'white', fontSize: '11px', boxSizing: 'border-box' }} />
            <button onClick={createTeam} style={{ width: '100%', padding: '8px', background: '#16a34a', border: 'none', borderRadius: '4px', color: 'white', fontWeight: 'bold', cursor: 'pointer', fontSize: '11px', marginBottom: '10px' }}>Create</button>
            <button onClick={logout} style={{ width: '100%', padding: '12px', background: '#ef4444', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>Logout</button>
          </div>

          {/* CENTER */}
          <div style={{ flex: 1, padding: '40px', overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h1 style={{ fontSize: '36px', margin: '0 0 5px 0' }}>Ether Aerospace</h1>
              <h2 style={{ fontSize: '20px', margin: '0', color: '#93c5fd' }}>Space Trivia</h2>
            </div>

            <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '24px' }}>Quick Play</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
              <button onClick={() => setupGame('stars')} style={{ padding: '40px', background: 'linear-gradient(135deg, #2563eb, #1e40af)', border: 'none', borderRadius: '12px', color: 'white', cursor: 'pointer', fontSize: '20px', fontWeight: 'bold' }}>⚔️ Head-to-Head</button>
              <button onClick={() => setupGame('galaxies')} style={{ padding: '40px', background: 'linear-gradient(135deg, #ea580c, #c2410c)', border: 'none', borderRadius: '12px', color: 'white', cursor: 'pointer', fontSize: '20px', fontWeight: 'bold' }}>⚡ Speed Round</button>
              <button onClick={() => setupGame('stars')} style={{ padding: '40px', background: 'linear-gradient(135deg, #16a34a, #15803d)', border: 'none', borderRadius: '12px', color: 'white', cursor: 'pointer', fontSize: '20px', fontWeight: 'bold' }}>👥 Team Mode</button>
              <button onClick={() => setupGame('galaxies')} style={{ padding: '40px', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', border: 'none', borderRadius: '12px', color: 'white', cursor: 'pointer', fontSize: '20px', fontWeight: 'bold' }}>🎮 Custom</button>
            </div>

            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', width: '100%' }}>
              <button onClick={() => setScreen('leaderboard')} style={{ padding: '15px 30px', background: 'rgba(30, 58, 138, 0.6)', border: '2px solid rgba(59, 130, 246, 0.5)', borderRadius: '12px', color: 'white', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>🏆 Leaderboard</button>
              <button style={{ padding: '15px 30px', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', border: 'none', borderRadius: '12px', color: 'white', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>📧 Subscribe</button>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ width: '360px', background: 'rgba(30, 58, 138, 0.4)', padding: '20px', borderLeft: '1px solid rgba(59, 130, 246, 0.3)', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ marginBottom: '15px', fontSize: '16px', borderBottom: '2px solid rgba(59, 130, 246, 0.5)', paddingBottom: '10px' }}>📚 Categories</h3>
            
            <div style={{ flex: 1, overflowY: 'auto', marginBottom: '30px' }}>
              {Object.keys(majorCategories).map(categoryKey => {
                const category = majorCategories[categoryKey];
                const isExpanded = expandedCategories[categoryKey];
                const displayedSubcats = getDisplayedSubcats(categoryKey);
                const hasMore = category.subcategories.length > 3;

                return (
                  <div key={categoryKey} style={{ marginBottom: '15px' }}>
                    <button onClick={() => toggleCategory(categoryKey)} style={{ width: '100%', padding: '12px', background: 'rgba(30, 58, 138, 0.6)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '6px', color: 'white', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span>{category.name}</span>
                      <span>{isExpanded ? '▼' : '▶'}</span>
                    </button>

                    {isExpanded && (
                      <>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {displayedSubcats.map(subcat => (
                            <button key={subcat.id} onClick={() => setupGame(subcat.id)} style={{ padding: '10px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '4px', color: 'white', cursor: 'pointer', fontSize: '11px', textAlign: 'left', display: 'flex', justifyContent: 'space-between' }}>
                              <span>{subcat.name}</span>
                              <ChevronRight size={14} />
                            </button>
                          ))}
                        </div>
                        {hasMore && (
                          <button onClick={() => toggleShowMore(categoryKey)} style={{ width: '100%', marginTop: '6px', padding: '6px', background: 'rgba(30, 58, 138, 0.5)', border: '1px dashed rgba(59, 130, 246, 0.5)', borderRadius: '3px', color: '#93c5fd', cursor: 'pointer', fontSize: '10px', fontWeight: 'bold' }}>
                            {showMoreSubcats[categoryKey] ? '- Show Less' : '+ Load More'}
                          </button>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            <h3 style={{ marginBottom: '12px', fontSize: '14px', borderBottom: '2px solid rgba(59, 130, 246, 0.5)', paddingBottom: '8px' }}>📖 Game Rules & Modes</h3>
            
            {!selectedGameMode ? (
              <button onClick={() => setSelectedGameMode('modes')} style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #2563eb, #0891b2)', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>Select Game Mode</button>
            ) : selectedGameMode === 'modes' ? (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px', marginBottom: '12px' }}>
                  <button onClick={() => setSelectedGameMode('head-to-head')} style={{ padding: '12px', background: 'linear-gradient(135deg, #2563eb, #1e40af)', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}>⚔️ Head-to-Head</button>
                  <button onClick={() => setSelectedGameMode('speed-round')} style={{ padding: '12px', background: 'linear-gradient(135deg, #ea580c, #c2410c)', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}>⚡ Speed Round</button>
                  <button onClick={() => setSelectedGameMode('team-mode')} style={{ padding: '12px', background: 'linear-gradient(135deg, #16a34a, #15803d)', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}>👥 Team Mode</button>
                  <button onClick={() => setSelectedGameMode('custom')} style={{ padding: '12px', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}>🎮 Custom</button>
                </div>
                <button onClick={() => setSelectedGameMode(null)} style={{ width: '100%', padding: '8px', background: 'rgba(30, 58, 138, 0.6)', border: '1px solid rgba(59, 130, 246, 0.5)', borderRadius: '6px', color: 'white', cursor: 'pointer', fontSize: '12px' }}>← Back</button>
              </div>
            ) : gameRules[selectedGameMode] ? (
              <div>
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.3)', marginBottom: '12px' }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '13px' }}>{gameRules[selectedGameMode].title}</h4>
                  <ul style={{ margin: '0', paddingLeft: '16px', fontSize: '10px', color: '#93c5fd' }}>
                    {gameRules[selectedGameMode].rules.map((rule, idx) => (
                      <li key={idx} style={{ marginBottom: '4px' }}>{rule}</li>
                    ))}
                  </ul>
                </div>
                <button onClick={() => setSelectedGameMode('modes')} style={{ width: '100%', padding: '8px', background: 'rgba(30, 58, 138, 0.6)', border: '1px solid rgba(59, 130, 246, 0.5)', borderRadius: '6px', color: 'white', cursor: 'pointer', fontSize: '12px' }}>← Back to Modes</button>
              </div>
            ) : null}
          </div>
        </div>
      )}

      {/* MOBILE LAYOUT - ONE COLUMN */}
      {isMobile && screen === 'home' && currentUser && !isPlaying && !showGameSetup && (
        <div style={{ maxWidth: '100%', padding: '20px' }}>
          <div style={{ background: 'rgba(30, 58, 138, 0.6)', padding: '20px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>{currentUser.avatar}</div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>{currentUser.username}</h3>
            <p style={{ margin: '8px 0 5px 0', fontSize: '12px', color: '#93c5fd' }}>Score: {currentUser.totalScore}</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#93c5fd' }}>Games: {gamesPlayed}</p>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h1 style={{ fontSize: '28px', margin: '0 0 5px 0' }}>Ether Aerospace</h1>
            <h2 style={{ fontSize: '16px', margin: '0', color: '#93c5fd' }}>Space Trivia</h2>
          </div>

          <h2 style={{ textAlign: 'center', marginBottom: '15px', fontSize: '18px' }}>Quick Play</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
            <button onClick={() => setupGame('stars')} style={{ padding: '25px 15px', background: 'linear-gradient(135deg, #2563eb, #1e40af)', border: 'none', borderRadius: '12px', color: 'white', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>⚔️ H2H</button>
            <button onClick={() => setupGame('galaxies')} style={{ padding: '25px 15px', background: 'linear-gradient(135deg, #ea580c, #c2410c)', border: 'none', borderRadius: '12px', color: 'white', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>⚡ Speed</button>
            <button onClick={() => setupGame('stars')} style={{ padding: '25px 15px', background: 'linear-gradient(135deg, #16a34a, #15803d)', border: 'none', borderRadius: '12px', color: 'white', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>👥 Team</button>
            <button onClick={() => setupGame('galaxies')} style={{ padding: '25px 15px', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', border: 'none', borderRadius: '12px', color: 'white', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>🎮 Custom</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '30px' }}>
            <button onClick={() => setScreen('leaderboard')} style={{ padding: '12px', background: 'rgba(30, 58, 138, 0.6)', border: '2px solid rgba(59, 130, 246, 0.5)', borderRadius: '12px', color: 'white', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}>🏆 Board</button>
            <button style={{ padding: '12px', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', border: 'none', borderRadius: '12px', color: 'white', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}>📧 Sub</button>
          </div>

          <h3 style={{ textAlign: 'center', marginBottom: '15px', fontSize: '16px' }}>📚 Categories</h3>
          <div style={{ marginBottom: '30px' }}>
            {Object.keys(majorCategories).map(categoryKey => {
              const category = majorCategories[categoryKey];
              const isExpanded = expandedCategories[categoryKey];
              const displayedSubcats = getDisplayedSubcats(categoryKey);
              const hasMore = category.subcategories.length > 3;

              return (
                <div key={categoryKey} style={{ marginBottom: '15px' }}>
                  <button onClick={() => toggleCategory(categoryKey)} style={{ width: '100%', padding: '12px', background: 'rgba(30, 58, 138, 0.6)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '6px', color: 'white', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span>{category.name}</span>
                    <span>{isExpanded ? '▼' : '▶'}</span>
                  </button>

                  {isExpanded && (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {displayedSubcats.map(subcat => (
                          <button key={subcat.id} onClick={() => setupGame(subcat.id)} style={{ padding: '10px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '4px', color: 'white', cursor: 'pointer', fontSize: '11px', textAlign: 'left', display: 'flex', justifyContent: 'space-between' }}>
                            <span>{subcat.name}</span>
                            <ChevronRight size={14} />
                          </button>
                        ))}
                      </div>
                      {hasMore && (
                        <button onClick={() => toggleShowMore(categoryKey)} style={{ width: '100%', marginTop: '6px', padding: '6px', background: 'rgba(30, 58, 138, 0.5)', border: '1px dashed rgba(59, 130, 246, 0.5)', borderRadius: '3px', color: '#93c5fd', cursor: 'pointer', fontSize: '10px', fontWeight: 'bold' }}>
                          {showMoreSubcats[categoryKey] ? '- Show Less' : '+ Load More'}
                        </button>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <h3 style={{ textAlign: 'center', marginBottom: '15px', fontSize: '16px' }}>👥 My Teams</h3>
          <div style={{ marginBottom: '30px' }}>
            {currentUser.teamIds.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#93c5fd', fontSize: '12px' }}>No teams yet</p>
            ) : (
              currentUser.teamIds.map(teamId => {
                const team = teams.find(t => t.id === teamId);
                return team && (
                  <div key={teamId} style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '12px', marginBottom: '8px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '12px' }}>{team.name}</h4>
                      <p style={{ margin: '0', fontSize: '10px', color: '#93c5fd' }}>Score: {team.totalScore}</p>
                    </div>
                    <button onClick={() => leaveTeam(teamId)} style={{ padding: '4px 8px', background: '#ef4444', border: 'none', borderRadius: '3px', color: 'white', cursor: 'pointer', fontSize: '9px', fontWeight: 'bold' }}>Leave</button>
                  </div>
                );
              })
            )}
          </div>

          <h3 style={{ textAlign: 'center', marginBottom: '15px', fontSize: '16px' }}>➕ Create Team</h3>
          <div style={{ marginBottom: '30px' }}>
            <input type="text" placeholder="Team name" value={teamName} onChange={(e) => setTeamName(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '8px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(59, 130, 246, 0.5)', borderRadius: '4px', color: 'white', fontSize: '12px', boxSizing: 'border-box' }} />
            <button onClick={createTeam} style={{ width: '100%', padding: '10px', background: '#16a34a', border: 'none', borderRadius: '4px', color: 'white', fontWeight: 'bold', cursor: 'pointer', fontSize: '12px', marginBottom: '10px' }}>Create Team</button>
          </div>

          <button onClick={logout} style={{ width: '100%', padding: '12px', background: '#ef4444', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold', marginBottom: '20px' }}>Logout</button>
        </div>
      )}

      {/* PLAYING */}
      {isPlaying && currentQuestion && (
        <div style={{ maxWidth: '100%', margin: '20px auto', padding: '20px' }}>
          <div style={{ background: 'rgba(30, 58, 138, 0.6)', padding: '20px', borderRadius: '12px', marginBottom: '20px', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>{selectedSubcategory.toUpperCase()} - {selectedDifficulty.toUpperCase()}</h3>
            <p style={{ margin: '0', color: '#93c5fd', fontSize: '12px' }}>Time: {timeLeft}s | Score: {roundScore}</p>
          </div>

          <div style={{ background: 'rgba(30, 58, 138, 0.8)', padding: '20px', borderRadius: '12px', marginBottom: '20px', minHeight: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontSize: '11px', color: '#93c5fd', margin: '0 0 10px 0' }}>Question {questionNumber}/{getTotalQuestions()}</p>
            <h2 style={{ fontSize: '18px', margin: '0', textAlign: 'center' }}>{currentQuestion.q}</h2>
          </div>

          {!showResult ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', marginBottom: '20px' }}>
              {multipleChoiceOptions.map((option, idx) => (
                <button key={idx} onClick={() => handleAnswer(option)} style={{ padding: '15px', background: 'rgba(30, 58, 138, 0.7)', border: '2px solid rgba(59, 130, 246, 0.5)', borderRadius: '8px', color: 'white', cursor: 'pointer', fontSize: '13px', textAlign: 'center' }}>
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <div style={{ background: 'rgba(30, 58, 138, 0.6)', padding: '15px', borderRadius: '12px', marginBottom: '20px', width: '100%' }}>
              <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold', color: selectedAnswer === currentQuestion.a ? '#4ade80' : '#ef4444' }}>
                {selectedAnswer === currentQuestion.a ? '✓ Correct!' : '✗ Incorrect'}
              </p>
              <p style={{ margin: '0', fontSize: '12px', color: '#93c5fd' }}>Answer: {currentQuestion.a}</p>
            </div>
          )}

          {showResult && (
            <button onClick={nextQuestion} style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #2563eb, #0891b2)', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer', fontWeight: 'bold', marginBottom: '10px', fontSize: '13px' }}>
              Next Question
            </button>
          )}

          <button onClick={returnToModes} style={{ width: '100%', padding: '10px', background: 'rgba(30, 58, 138, 0.6)', border: '1px solid rgba(59, 130, 246, 0.5)', borderRadius: '6px', color: 'white', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' }}>
            Return to Game Modes
          </button>
        </div>
      )}

      {/* LEADERBOARD */}
      {screen === 'leaderboard' && currentUser && (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>🏆 Leaderboard</h2>
          
          <div style={{ background: 'rgba(30, 58, 138, 0.6)', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
            <h3>Teams</h3>
            {teams.filter(t => t.isPublic).sort((a, b) => b.totalScore - a.totalScore).map((team, idx) => (
              <div key={team.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', borderBottom: '1px solid rgba(59, 130, 246, 0.3)' }}>
                <span><span style={{ fontSize: '16px', fontWeight: 'bold', color: '#fbbf24' }}>{idx + 1}.</span> {team.name}</span>
                <span style={{ fontWeight: 'bold', color: '#4ade80' }}>{team.totalScore}</span>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(30, 58, 138, 0.6)', padding: '20px', borderRadius: '12px', marginBottom: '30px' }}>
            <h3>Individuals</h3>
            {users.filter(u => u.isPublic).sort((a, b) => b.totalScore - a.totalScore).map((user, idx) => (
              <div key={user.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', borderBottom: '1px solid rgba(59, 130, 246, 0.3)' }}>
                <span><span style={{ fontSize: '16px', fontWeight: 'bold', color: '#fbbf24' }}>{idx + 1}.</span> {user.avatar} {user.username}</span>
                <span style={{ fontWeight: 'bold', color: '#4ade80' }}>{user.totalScore}</span>
              </div>
            ))}
          </div>

          <button style={{ width: '100%', padding: '15px', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', border: 'none', borderRadius: '12px', color: 'white', cursor: 'pointer', fontWeight: 'bold', marginBottom: '15px' }}>📧 Subscribe</button>
          <button onClick={() => setScreen('home')} style={{ width: '100%', padding: '15px', background: 'rgba(30, 58, 138, 0.6)', border: '2px solid rgba(59, 130, 246, 0.5)', borderRadius: '12px', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>Back</button>
        </div>
      )}
    </div>
  );
}
