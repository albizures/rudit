import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const занумеровывать: PerfectVerb = {
  name: Word('занумеровывать', 7),
  singular1stPerson: Word('занумеровываю', 7),
  singular2ndPerson: Word('занумеровываешь', 7),
  singular3rdPerson: Word('занумеровывает', 7),
  plural1stPerson: Word('занумеровываем', 7),
  plural2ndPerson: Word('занумеровываете', 7),
  plural3rdPerson: Word('занумеровывают', 7),
  masculinePast: Word('занумеровывал', 7),
  femininePast: Word('занумеровывала', 7),
  neuterPast: Word('занумеровывало', 7),
  pluralPast: Word('занумеровывали', 7),
  imperativeInformal: Word('занумеровывай', 7),
  imperativeFormal: Word('занумеровывайте', 7),
  imperfect: [],
};

perfectVerbs.set(занумеровывать.name.text, занумеровывать);

export { занумеровывать };