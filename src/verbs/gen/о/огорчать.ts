import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огорчать: PerfectVerb = {
  name: Word('огорчать', 5),
  singular1stPerson: Word('огорчаю', 5),
  singular2ndPerson: Word('огорчаешь', 5),
  singular3rdPerson: Word('огорчает', 5),
  plural1stPerson: Word('огорчаем', 5),
  plural2ndPerson: Word('огорчаете', 5),
  plural3rdPerson: Word('огорчают', 5),
  masculinePast: Word('огорчал', 5),
  femininePast: Word('огорчала', 5),
  neuterPast: Word('огорчало', 5),
  pluralPast: Word('огорчали', 5),
  imperativeInformal: Word('огорчай', 5),
  imperativeFormal: Word('огорчайте', 5),
  imperfect: [],
};

perfectVerbs.set(огорчать.name.text, огорчать);

export { огорчать };