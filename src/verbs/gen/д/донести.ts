import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const донести: PerfectVerb = {
  name: Word('донести', 6),
  singular1stPerson: Word('донесу', 5),
  singular2ndPerson: Word('донесёшь', 3),
  singular3rdPerson: Word('донесёт', 3),
  plural1stPerson: Word('донесём', 3),
  plural2ndPerson: Word('донесёте', 3),
  plural3rdPerson: Word('донесут', 5),
  masculinePast: Word('донёс', 1),
  femininePast: Word('донесла', 6),
  neuterPast: Word('донесло', 6),
  pluralPast: Word('донесли', 6),
  imperativeInformal: Word('донеси', 5),
  imperativeFormal: Word('донесите', 5),
  imperfect: ['доносить'],
};

perfectVerbs.set(донести.name.text, донести);

export { донести };