import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переряжаться: PerfectVerb = {
  name: Word('переряжаться', 7),
  singular1stPerson: Word('переряжаюсь', 7),
  singular2ndPerson: Word('переряжаешься', 7),
  singular3rdPerson: Word('переряжается', 7),
  plural1stPerson: Word('переряжаемся', 7),
  plural2ndPerson: Word('переряжаетесь', 7),
  plural3rdPerson: Word('переряжаются', 7),
  masculinePast: Word('переряжался', 7),
  femininePast: Word('переряжалась', 7),
  neuterPast: Word('переряжалось', 7),
  pluralPast: Word('переряжались', 7),
  imperativeInformal: Word('переряжайся', 7),
  imperativeFormal: Word('переряжайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(переряжаться.name.text, переряжаться);

export { переряжаться };