import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воплощать: PerfectVerb = {
  name: Word('воплощать', 6),
  singular1stPerson: Word('воплощаю', 6),
  singular2ndPerson: Word('воплощаешь', 6),
  singular3rdPerson: Word('воплощает', 6),
  plural1stPerson: Word('воплощаем', 6),
  plural2ndPerson: Word('воплощаете', 6),
  plural3rdPerson: Word('воплощают', 6),
  masculinePast: Word('воплощал', 6),
  femininePast: Word('воплощала', 6),
  neuterPast: Word('воплощало', 6),
  pluralPast: Word('воплощали', 6),
  imperativeInformal: Word('воплощай', 6),
  imperativeFormal: Word('воплощайте', 6),
  imperfect: [],
};

perfectVerbs.set(воплощать.name.text, воплощать);

export { воплощать };