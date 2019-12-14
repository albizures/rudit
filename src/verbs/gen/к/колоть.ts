import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колоть: PerfectVerb = {
  name: Word('колоть', 3),
  singular1stPerson: Word('колю', 3),
  singular2ndPerson: Word('колешь', 1),
  singular3rdPerson: Word('колет', 1),
  plural1stPerson: Word('колем', 1),
  plural2ndPerson: Word('колете', 1),
  plural3rdPerson: Word('колют', 1),
  masculinePast: Word('колол', 3),
  femininePast: Word('колола', 3),
  neuterPast: Word('кололо', 3),
  pluralPast: Word('кололи', 3),
  imperativeInformal: Word('коли', 3),
  imperativeFormal: Word('колите', 3),
  imperfect: [],
};

perfectVerbs.set(колоть.name.text, колоть);

export { колоть };