import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемолоть: PerfectVerb = {
  name: Word('перемолоть', 7),
  singular1stPerson: Word('перемелю', 7),
  singular2ndPerson: Word('перемелешь', 5),
  singular3rdPerson: Word('перемелет', 5),
  plural1stPerson: Word('перемелем', 5),
  plural2ndPerson: Word('перемелете', 5),
  plural3rdPerson: Word('перемелют', 5),
  masculinePast: Word('перемолол', 7),
  femininePast: Word('перемолола', 7),
  neuterPast: Word('перемололо', 7),
  pluralPast: Word('перемололи', 7),
  imperativeInformal: Word('перемели', 7),
  imperativeFormal: Word('перемелите', 7),
  imperfect: [],
};

perfectVerbs.set(перемолоть.name.text, перемолоть);

export { перемолоть };