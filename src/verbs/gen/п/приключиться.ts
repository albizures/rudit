import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приключиться: PerfectVerb = {
  name: Word('приключиться', 7),
  singular1stPerson: Word('приключусь', 7),
  singular2ndPerson: Word('приключишься', 7),
  singular3rdPerson: Word('приключится', 7),
  plural1stPerson: Word('приключимся', 7),
  plural2ndPerson: Word('приключитесь', 7),
  plural3rdPerson: Word('приключатся', 7),
  masculinePast: Word('приключился', 7),
  femininePast: Word('приключилась', 7),
  neuterPast: Word('приключилось', 7),
  pluralPast: Word('приключились', 7),
  imperativeInformal: Word('приключись', 7),
  imperativeFormal: Word('приключитесь', 7),
  imperfect: [],
};

perfectVerbs.set(приключиться.name.text, приключиться);

export { приключиться };