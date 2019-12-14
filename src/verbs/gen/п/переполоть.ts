import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переполоть: PerfectVerb = {
  name: Word('переполоть', 7),
  singular1stPerson: Word('переполю', 7),
  singular2ndPerson: Word('переполешь', 5),
  singular3rdPerson: Word('переполет', 5),
  plural1stPerson: Word('переполем', 5),
  plural2ndPerson: Word('переполете', 5),
  plural3rdPerson: Word('переполют', 5),
  masculinePast: Word('переполол', 7),
  femininePast: Word('переполола', 7),
  neuterPast: Word('перепололо', 7),
  pluralPast: Word('перепололи', 7),
  imperativeInformal: Word('переполи', 7),
  imperativeFormal: Word('переполите', 7),
  imperfect: [],
};

perfectVerbs.set(переполоть.name.text, переполоть);

export { переполоть };