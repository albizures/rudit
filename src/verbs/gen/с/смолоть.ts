import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смолоть: PerfectVerb = {
  name: Word('смолоть', 4),
  singular1stPerson: Word('смелю', 4),
  singular2ndPerson: Word('смелешь', 2),
  singular3rdPerson: Word('смелет', 2),
  plural1stPerson: Word('смелем', 2),
  plural2ndPerson: Word('смелете', 2),
  plural3rdPerson: Word('смелют', 2),
  masculinePast: Word('смолол', 4),
  femininePast: Word('смолола', 4),
  neuterPast: Word('смололо', 4),
  pluralPast: Word('смололи', 4),
  imperativeInformal: Word('смели', 4),
  imperativeFormal: Word('смелите', 4),
  imperfect: ['молоть'],
};

perfectVerbs.set(смолоть.name.text, смолоть);

export { смолоть };