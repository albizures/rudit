import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расклеиться: PerfectVerb = {
  name: Word('расклеиться', 5),
  singular1stPerson: Word('расклеюсь', 5),
  singular2ndPerson: Word('расклеишься', 5),
  singular3rdPerson: Word('расклеится', 5),
  plural1stPerson: Word('расклеимся', 5),
  plural2ndPerson: Word('расклеитесь', 5),
  plural3rdPerson: Word('расклеятся', 5),
  masculinePast: Word('расклеился', 5),
  femininePast: Word('расклеилась', 5),
  neuterPast: Word('расклеилось', 5),
  pluralPast: Word('расклеились', 5),
  imperativeInformal: Word('расклейся', 5),
  imperativeFormal: Word('расклейтесь', 5),
  imperfect: [],
};

perfectVerbs.set(расклеиться.name.text, расклеиться);

export { расклеиться };