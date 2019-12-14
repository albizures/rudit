import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засуетиться: PerfectVerb = {
  name: Word('засуетиться', 6),
  singular1stPerson: Word('засуечусь', 6),
  singular2ndPerson: Word('засуетишься', 6),
  singular3rdPerson: Word('засуетится', 6),
  plural1stPerson: Word('засуетимся', 6),
  plural2ndPerson: Word('засуетитесь', 6),
  plural3rdPerson: Word('засуетятся', 6),
  masculinePast: Word('засуетился', 6),
  femininePast: Word('засуетилась', 6),
  neuterPast: Word('засуетилось', 6),
  pluralPast: Word('засуетились', 6),
  imperativeInformal: Word('засуетись', 6),
  imperativeFormal: Word('засуетитесь', 6),
  imperfect: [],
};

perfectVerbs.set(засуетиться.name.text, засуетиться);

export { засуетиться };