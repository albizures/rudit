import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приютиться: PerfectVerb = {
  name: Word('приютиться', 5),
  singular1stPerson: Word('приючусь', 5),
  singular2ndPerson: Word('приютишься', 5),
  singular3rdPerson: Word('приютится', 5),
  plural1stPerson: Word('приютимся', 5),
  plural2ndPerson: Word('приютитесь', 5),
  plural3rdPerson: Word('приютятся', 5),
  masculinePast: Word('приютился', 5),
  femininePast: Word('приютилась', 5),
  neuterPast: Word('приютилось', 5),
  pluralPast: Word('приютились', 5),
  imperativeInformal: Word('приютись', 5),
  imperativeFormal: Word('приютитесь', 5),
  imperfect: [],
};

perfectVerbs.set(приютиться.name.text, приютиться);

export { приютиться };