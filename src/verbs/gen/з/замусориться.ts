import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замусориться: PerfectVerb = {
  name: Word('замусориться', 3),
  singular1stPerson: Word('замусорюсь', 3),
  singular2ndPerson: Word('замусоришься', 3),
  singular3rdPerson: Word('замусорится', 3),
  plural1stPerson: Word('замусоримся', 3),
  plural2ndPerson: Word('замусоритесь', 3),
  plural3rdPerson: Word('замусорятся', 3),
  masculinePast: Word('замусорился', 3),
  femininePast: Word('замусорилась', 3),
  neuterPast: Word('замусорилось', 3),
  pluralPast: Word('замусорились', 3),
  imperativeInformal: Word('замусорись//заму'сорься', 3),
  imperativeFormal: Word('замусорьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(замусориться.name.text, замусориться);

export { замусориться };