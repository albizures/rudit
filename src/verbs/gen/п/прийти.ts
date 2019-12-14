import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прийти: PerfectVerb = {
  name: Word('прийти', 5),
  singular1stPerson: Word('приду', 4),
  singular2ndPerson: Word('придёшь', 2),
  singular3rdPerson: Word('придёт', 2),
  plural1stPerson: Word('придём', 2),
  plural2ndPerson: Word('придёте', 6),
  plural3rdPerson: Word('придут', 4),
  masculinePast: Word('пришёл', 2),
  femininePast: Word('пришла', 5),
  neuterPast: Word('пришло', 5),
  pluralPast: Word('пришли', 5),
  imperativeInformal: Word('приди', 4),
  imperativeFormal: Word('придите', 4),
  imperfect: ['приходить'],
};

perfectVerbs.set(прийти.name.text, прийти);

export { прийти };