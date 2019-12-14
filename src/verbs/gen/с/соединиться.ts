import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соединиться: PerfectVerb = {
  name: Word('соединиться', 6),
  singular1stPerson: Word('соединюсь', 6),
  singular2ndPerson: Word('соединишься', 6),
  singular3rdPerson: Word('соединится', 6),
  plural1stPerson: Word('соединимся', 6),
  plural2ndPerson: Word('соединитесь', 6),
  plural3rdPerson: Word('соединятся', 6),
  masculinePast: Word('соединился', 6),
  femininePast: Word('соединилась', 6),
  neuterPast: Word('соединилось', 6),
  pluralPast: Word('соединились', 6),
  imperativeInformal: Word('соединись', 6),
  imperativeFormal: Word('соединитесь', 6),
  imperfect: ['соединяться'],
};

perfectVerbs.set(соединиться.name.text, соединиться);

export { соединиться };