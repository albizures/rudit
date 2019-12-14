import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трескать: PerfectVerb = {
  name: Word('трескать', 2),
  singular1stPerson: Word('трескаю', 2),
  singular2ndPerson: Word('трескаешь', 2),
  singular3rdPerson: Word('трескает', 2),
  plural1stPerson: Word('трескаем', 2),
  plural2ndPerson: Word('трескаете', 2),
  plural3rdPerson: Word('трескают', 2),
  masculinePast: Word('трескал', 2),
  femininePast: Word('трескала', 2),
  neuterPast: Word('трескало', 2),
  pluralPast: Word('трескали', 2),
  imperativeInformal: Word('трескай', 2),
  imperativeFormal: Word('трескайте', 2),
  imperfect: [],
};

perfectVerbs.set(трескать.name.text, трескать);

export { трескать };