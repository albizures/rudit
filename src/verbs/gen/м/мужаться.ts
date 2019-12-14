import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мужаться: PerfectVerb = {
  name: Word('мужаться', 3),
  singular1stPerson: Word('мужаюсь', 3),
  singular2ndPerson: Word('мужаешься', 3),
  singular3rdPerson: Word('мужается', 3),
  plural1stPerson: Word('мужаемся', 3),
  plural2ndPerson: Word('мужаетесь', 3),
  plural3rdPerson: Word('мужаются', 3),
  masculinePast: Word('мужался', 3),
  femininePast: Word('мужалась', 3),
  neuterPast: Word('мужалось', 3),
  pluralPast: Word('мужались', 3),
  imperativeInformal: Word('мужайся', 3),
  imperativeFormal: Word('мужайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(мужаться.name.text, мужаться);

export { мужаться };