import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбить: PerfectVerb = {
  name: Word('выбить', 1),
  singular1stPerson: Word('выбью', 1),
  singular2ndPerson: Word('выбьешь', 1),
  singular3rdPerson: Word('выбьет', 1),
  plural1stPerson: Word('выбьем', 1),
  plural2ndPerson: Word('выбьете', 1),
  plural3rdPerson: Word('выбьют', 1),
  masculinePast: Word('выбил', 1),
  femininePast: Word('выбила', 1),
  neuterPast: Word('выбило', 1),
  pluralPast: Word('выбили', 1),
  imperativeInformal: Word('выбей', 1),
  imperativeFormal: Word('выбейте', 1),
  imperfect: ['выбивать'],
};

perfectVerbs.set(выбить.name.text, выбить);

export { выбить };