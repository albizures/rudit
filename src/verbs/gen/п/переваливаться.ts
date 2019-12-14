import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переваливаться: PerfectVerb = {
  name: Word('переваливаться', 5),
  singular1stPerson: Word('переваливаюсь', 5),
  singular2ndPerson: Word('переваливаешься', 5),
  singular3rdPerson: Word('переваливается', 5),
  plural1stPerson: Word('переваливаемся', 5),
  plural2ndPerson: Word('переваливаетесь', 5),
  plural3rdPerson: Word('переваливаются', 5),
  masculinePast: Word('переваливался', 5),
  femininePast: Word('переваливалась', 5),
  neuterPast: Word('переваливалось', 5),
  pluralPast: Word('переваливались', 5),
  imperativeInformal: Word('переваливайся', 5),
  imperativeFormal: Word('переваливайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(переваливаться.name.text, переваливаться);

export { переваливаться };