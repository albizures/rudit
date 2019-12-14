import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспрещать: PerfectVerb = {
  name: Word('воспрещать', 7),
  singular1stPerson: Word('воспрещаю', 7),
  singular2ndPerson: Word('воспрещаешь', 7),
  singular3rdPerson: Word('воспрещает', 7),
  plural1stPerson: Word('воспрещаем', 7),
  plural2ndPerson: Word('воспрещаете', 7),
  plural3rdPerson: Word('воспрещают', 7),
  masculinePast: Word('воспрещал', 7),
  femininePast: Word('воспрещала', 7),
  neuterPast: Word('воспрещало', 7),
  pluralPast: Word('воспрещали', 7),
  imperativeInformal: Word('воспрещай', 7),
  imperativeFormal: Word('воспрещайте', 7),
  imperfect: [],
};

perfectVerbs.set(воспрещать.name.text, воспрещать);

export { воспрещать };