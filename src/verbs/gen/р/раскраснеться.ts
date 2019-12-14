import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскраснеться: PerfectVerb = {
  name: Word('раскраснеться', 8),
  singular1stPerson: Word('раскраснеюсь', 8),
  singular2ndPerson: Word('раскраснеешься', 8),
  singular3rdPerson: Word('раскраснеется', 8),
  plural1stPerson: Word('раскраснеемся', 8),
  plural2ndPerson: Word('раскраснеетесь', 8),
  plural3rdPerson: Word('раскраснеются', 8),
  masculinePast: Word('раскраснелся', 8),
  femininePast: Word('раскраснелась', 8),
  neuterPast: Word('раскраснелось', 8),
  pluralPast: Word('раскраснелись', 8),
  imperativeInformal: Word('раскраснейся', 8),
  imperativeFormal: Word('раскраснейтесь', 8),
  imperfect: [],
};

perfectVerbs.set(раскраснеться.name.text, раскраснеться);

export { раскраснеться };