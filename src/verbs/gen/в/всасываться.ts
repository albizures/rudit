import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всасываться: PerfectVerb = {
  name: Word('всасываться', 2),
  singular1stPerson: Word('всасываюсь', 2),
  singular2ndPerson: Word('всасываешься', 2),
  singular3rdPerson: Word('всасывается', 2),
  plural1stPerson: Word('всасываемся', 2),
  plural2ndPerson: Word('всасываетесь', 2),
  plural3rdPerson: Word('всасываются', 2),
  masculinePast: Word('всасывался', 2),
  femininePast: Word('всасывалась', 2),
  neuterPast: Word('всасывалось', 2),
  pluralPast: Word('всасывались', 2),
  imperativeInformal: Word('всасывайся', 2),
  imperativeFormal: Word('всасывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(всасываться.name.text, всасываться);

export { всасываться };