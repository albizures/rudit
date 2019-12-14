import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намолоть: PerfectVerb = {
  name: Word('намолоть', 5),
  singular1stPerson: Word('намелю', 5),
  singular2ndPerson: Word('намелешь', 3),
  singular3rdPerson: Word('намелет', 3),
  plural1stPerson: Word('намелем', 3),
  plural2ndPerson: Word('намелете', 3),
  plural3rdPerson: Word('намелют', 3),
  masculinePast: Word('намолол', 5),
  femininePast: Word('намолола', 5),
  neuterPast: Word('намололо', 5),
  pluralPast: Word('намололи', 5),
  imperativeInformal: Word('намели', 5),
  imperativeFormal: Word('намелите', 5),
  imperfect: [],
};

perfectVerbs.set(намолоть.name.text, намолоть);

export { намолоть };