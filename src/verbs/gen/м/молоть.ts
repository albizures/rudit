import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const молоть: PerfectVerb = {
  name: Word('молоть', 3),
  singular1stPerson: Word('мелю', 3),
  singular2ndPerson: Word('мелешь', 1),
  singular3rdPerson: Word('мелет', 1),
  plural1stPerson: Word('мелем', 1),
  plural2ndPerson: Word('мелете', 1),
  plural3rdPerson: Word('мелют', 1),
  masculinePast: Word('молол', 3),
  femininePast: Word('молола', 3),
  neuterPast: Word('мололо', 3),
  pluralPast: Word('мололи', 3),
  imperativeInformal: Word('мели', 3),
  imperativeFormal: Word('мелите', 3),
  imperfect: ['смолоть'],
};

perfectVerbs.set(молоть.name.text, молоть);

export { молоть };