import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевариваться: PerfectVerb = {
  name: Word('перевариваться', 5),
  singular1stPerson: Word('перевариваюсь', 5),
  singular2ndPerson: Word('перевариваешься', 5),
  singular3rdPerson: Word('переваривается', 5),
  plural1stPerson: Word('перевариваемся', 5),
  plural2ndPerson: Word('перевариваетесь', 5),
  plural3rdPerson: Word('перевариваются', 5),
  masculinePast: Word('переваривался', 5),
  femininePast: Word('переваривалась', 5),
  neuterPast: Word('переваривалось', 5),
  pluralPast: Word('переваривались', 5),
  imperativeInformal: Word('переваривайся', 5),
  imperativeFormal: Word('переваривайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перевариваться.name.text, перевариваться);

export { перевариваться };