import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замаяться: PerfectVerb = {
  name: Word('замаяться', 3),
  singular1stPerson: Word('замаюсь', 3),
  singular2ndPerson: Word('замаешься', 3),
  singular3rdPerson: Word('замается', 3),
  plural1stPerson: Word('замаемся', 3),
  plural2ndPerson: Word('замаетесь', 3),
  plural3rdPerson: Word('замаются', 3),
  masculinePast: Word('замаялся', 3),
  femininePast: Word('замаялась', 3),
  neuterPast: Word('замаялось', 3),
  pluralPast: Word('замаялись', 3),
  imperativeInformal: Word('замайся', 3),
  imperativeFormal: Word('замайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(замаяться.name.text, замаяться);

export { замаяться };