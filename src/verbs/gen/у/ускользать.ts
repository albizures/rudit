import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ускользать: PerfectVerb = {
  name: Word('ускользать', 7),
  singular1stPerson: Word('ускользаю', 7),
  singular2ndPerson: Word('ускользаешь', 7),
  singular3rdPerson: Word('ускользает', 7),
  plural1stPerson: Word('ускользаем', 7),
  plural2ndPerson: Word('ускользаете', 7),
  plural3rdPerson: Word('ускользают', 7),
  masculinePast: Word('ускользал', 7),
  femininePast: Word('ускользала', 7),
  neuterPast: Word('ускользало', 7),
  pluralPast: Word('ускользали', 7),
  imperativeInformal: Word('ускользай', 7),
  imperativeFormal: Word('ускользайте', 7),
  imperfect: [],
};

perfectVerbs.set(ускользать.name.text, ускользать);

export { ускользать };