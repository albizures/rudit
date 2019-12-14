import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пролиться: PerfectVerb = {
  name: Word('пролиться', 4),
  singular1stPerson: Word('прольюсь', 5),
  singular2ndPerson: Word('прольёшься', 2),
  singular3rdPerson: Word('прольётся', 2),
  plural1stPerson: Word('прольёмся', 2),
  plural2ndPerson: Word('прольётесь', 7),
  plural3rdPerson: Word('прольются', 5),
  masculinePast: Word('пролился', 4),
  femininePast: Word('пролилась', 6),
  neuterPast: Word('пролилось//пролило'сь', 4),
  pluralPast: Word('пролились//пролили'сь', 4),
  imperativeInformal: Word('пролейся', 4),
  imperativeFormal: Word('пролейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(пролиться.name.text, пролиться);

export { пролиться };