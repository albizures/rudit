import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просыхать: PerfectVerb = {
  name: Word('просыхать', 6),
  singular1stPerson: Word('просыхаю', 6),
  singular2ndPerson: Word('просыхаешь', 6),
  singular3rdPerson: Word('просыхает', 6),
  plural1stPerson: Word('просыхаем', 6),
  plural2ndPerson: Word('просыхаете', 6),
  plural3rdPerson: Word('просыхают', 6),
  masculinePast: Word('просыхал', 6),
  femininePast: Word('просыхала', 6),
  neuterPast: Word('просыхало', 6),
  pluralPast: Word('просыхали', 6),
  imperativeInformal: Word('просыхай', 6),
  imperativeFormal: Word('просыхайте', 6),
  imperfect: [],
};

perfectVerbs.set(просыхать.name.text, просыхать);

export { просыхать };