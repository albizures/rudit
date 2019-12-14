import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ополчать: PerfectVerb = {
  name: Word('ополчать', 5),
  singular1stPerson: Word('ополчаю', 5),
  singular2ndPerson: Word('ополчаешь', 5),
  singular3rdPerson: Word('ополчает', 5),
  plural1stPerson: Word('ополчаем', 5),
  plural2ndPerson: Word('ополчаете', 5),
  plural3rdPerson: Word('ополчают', 5),
  masculinePast: Word('ополчал', 5),
  femininePast: Word('ополчала', 5),
  neuterPast: Word('ополчало', 5),
  pluralPast: Word('ополчали', 5),
  imperativeInformal: Word('ополчай', 5),
  imperativeFormal: Word('ополчайте', 5),
  imperfect: [],
};

perfectVerbs.set(ополчать.name.text, ополчать);

export { ополчать };