import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпить: PerfectVerb = {
  name: Word('выпить', 1),
  singular1stPerson: Word('выпью', 1),
  singular2ndPerson: Word('выпьешь', 1),
  singular3rdPerson: Word('выпьет', 1),
  plural1stPerson: Word('выпьем', 1),
  plural2ndPerson: Word('выпьете', 1),
  plural3rdPerson: Word('выпьют', 1),
  masculinePast: Word('выпил', 1),
  femininePast: Word('выпила', 1),
  neuterPast: Word('выпило', 1),
  pluralPast: Word('выпили', 1),
  imperativeInformal: Word('выпей', 1),
  imperativeFormal: Word('выпейте', 1),
  imperfect: ['пить','выпивать'],
};

perfectVerbs.set(выпить.name.text, выпить);

export { выпить };