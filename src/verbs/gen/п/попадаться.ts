import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попадаться: PerfectVerb = {
  name: Word('попадаться', 5),
  singular1stPerson: Word('попадаюсь', 5),
  singular2ndPerson: Word('попадаешься', 5),
  singular3rdPerson: Word('попадается', 5),
  plural1stPerson: Word('попадаемся', 5),
  plural2ndPerson: Word('попадаетесь', 5),
  plural3rdPerson: Word('попадаются', 5),
  masculinePast: Word('попадался', 5),
  femininePast: Word('попадалась', 5),
  neuterPast: Word('попадалось', 5),
  pluralPast: Word('попадались', 5),
  imperativeInformal: Word('попадайся', 5),
  imperativeFormal: Word('попадайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(попадаться.name.text, попадаться);

export { попадаться };