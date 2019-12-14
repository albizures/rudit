import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плюхаться: PerfectVerb = {
  name: Word('плюхаться', 2),
  singular1stPerson: Word('плюхаюсь', 2),
  singular2ndPerson: Word('плюхаешься', 2),
  singular3rdPerson: Word('плюхается', 2),
  plural1stPerson: Word('плюхаемся', 2),
  plural2ndPerson: Word('плюхаетесь', 2),
  plural3rdPerson: Word('плюхаются', 2),
  masculinePast: Word('плюхался', 2),
  femininePast: Word('плюхалась', 2),
  neuterPast: Word('плюхалось', 2),
  pluralPast: Word('плюхались', 2),
  imperativeInformal: Word('плюхайся', 2),
  imperativeFormal: Word('плюхайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(плюхаться.name.text, плюхаться);

export { плюхаться };