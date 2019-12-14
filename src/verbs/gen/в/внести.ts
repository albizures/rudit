import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const внести: PerfectVerb = {
  name: Word('внести', 5),
  singular1stPerson: Word('внесу', 4),
  singular2ndPerson: Word('внесёшь', 2),
  singular3rdPerson: Word('внесёт', 2),
  plural1stPerson: Word('внесём', 2),
  plural2ndPerson: Word('внесёте', 2),
  plural3rdPerson: Word('внесут', 4),
  masculinePast: Word('внёс', 2),
  femininePast: Word('внесла', 5),
  neuterPast: Word('внесло', 5),
  pluralPast: Word('внесли', 5),
  imperativeInformal: Word('внеси', 4),
  imperativeFormal: Word('внесите', 4),
  imperfect: ['вносить'],
};

perfectVerbs.set(внести.name.text, внести);

export { внести };