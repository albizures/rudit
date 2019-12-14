import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докупаться: PerfectVerb = {
  name: Word('докупаться', 5),
  singular1stPerson: Word('докупаюсь', 5),
  singular2ndPerson: Word('докупаешься', 5),
  singular3rdPerson: Word('докупается', 5),
  plural1stPerson: Word('докупаемся', 5),
  plural2ndPerson: Word('докупаетесь', 5),
  plural3rdPerson: Word('докупаются', 5),
  masculinePast: Word('докупался', 5),
  femininePast: Word('докупалась', 5),
  neuterPast: Word('докупалось', 5),
  pluralPast: Word('докупались', 5),
  imperativeInformal: Word('докупайся', 5),
  imperativeFormal: Word('докупайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(докупаться.name.text, докупаться);

export { докупаться };