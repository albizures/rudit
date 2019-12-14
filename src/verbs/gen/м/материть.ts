import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const материть: PerfectVerb = {
  name: Word('материть', 5),
  singular1stPerson: Word('матерю', 5),
  singular2ndPerson: Word('материшь', 5),
  singular3rdPerson: Word('материт', 5),
  plural1stPerson: Word('материм', 5),
  plural2ndPerson: Word('материте', 5),
  plural3rdPerson: Word('матерят', 5),
  masculinePast: Word('материл', 5),
  femininePast: Word('материла', 5),
  neuterPast: Word('материло', 5),
  pluralPast: Word('материли', 5),
  imperativeInformal: Word('матери', 5),
  imperativeFormal: Word('материте', 5),
  imperfect: ['обматерить'],
};

perfectVerbs.set(материть.name.text, материть);

export { материть };