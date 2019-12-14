import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переосвидетельствоваться: PerfectVerb = {
  name: Word('переосвидетельствоваться', 9),
  singular1stPerson: Word('переосвидетельствуюсь', 9),
  singular2ndPerson: Word('переосвидетельствуешься', 9),
  singular3rdPerson: Word('переосвидетельствуется', 9),
  plural1stPerson: Word('переосвидетельствуемся', 9),
  plural2ndPerson: Word('переосвидетельствуетесь', 9),
  plural3rdPerson: Word('переосвидетельствуются', 9),
  masculinePast: Word('переосвидетельствовался', 9),
  femininePast: Word('переосвидетельствовалась', 9),
  neuterPast: Word('переосвидетельствовалось', 9),
  pluralPast: Word('переосвидетельствовались', 9),
  imperativeInformal: Word('переосвидетельствуйся', 9),
  imperativeFormal: Word('переосвидетельствуйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(переосвидетельствоваться.name.text, переосвидетельствоваться);

export { переосвидетельствоваться };