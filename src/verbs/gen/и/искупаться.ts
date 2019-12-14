import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искупаться: PerfectVerb = {
  name: Word('искупаться', 5),
  singular1stPerson: Word('искупаюсь', 5),
  singular2ndPerson: Word('искупаешься', 5),
  singular3rdPerson: Word('искупается', 5),
  plural1stPerson: Word('искупаемся', 5),
  plural2ndPerson: Word('искупаетесь', 5),
  plural3rdPerson: Word('искупаются', 5),
  masculinePast: Word('искупался', 5),
  femininePast: Word('искупалась', 5),
  neuterPast: Word('искупалось', 5),
  pluralPast: Word('искупались', 5),
  imperativeInformal: Word('искупайся', 5),
  imperativeFormal: Word('искупайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(искупаться.name.text, искупаться);

export { искупаться };