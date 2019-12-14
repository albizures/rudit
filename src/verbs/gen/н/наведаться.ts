import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наведаться: PerfectVerb = {
  name: Word('наведаться', 3),
  singular1stPerson: Word('наведаюсь', 3),
  singular2ndPerson: Word('наведаешься', 3),
  singular3rdPerson: Word('наведается', 3),
  plural1stPerson: Word('наведаемся', 3),
  plural2ndPerson: Word('наведаетесь', 3),
  plural3rdPerson: Word('наведаются', 3),
  masculinePast: Word('наведался', 3),
  femininePast: Word('наведалась', 3),
  neuterPast: Word('наведалось', 3),
  pluralPast: Word('наведались', 3),
  imperativeInformal: Word('наведайся', 3),
  imperativeFormal: Word('наведайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(наведаться.name.text, наведаться);

export { наведаться };