import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изготавливаться: PerfectVerb = {
  name: Word('изготавливаться', 5),
  singular1stPerson: Word('изготавливаюсь', 5),
  singular2ndPerson: Word('изготавливаешься', 5),
  singular3rdPerson: Word('изготавливается', 5),
  plural1stPerson: Word('изготавливаемся', 5),
  plural2ndPerson: Word('изготавливаетесь', 5),
  plural3rdPerson: Word('изготавливаются', 5),
  masculinePast: Word('изготавливался', 5),
  femininePast: Word('изготавливалась', 5),
  neuterPast: Word('изготавливалось', 5),
  pluralPast: Word('изготавливались', 5),
  imperativeInformal: Word('изготавливайся', 5),
  imperativeFormal: Word('изготавливайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(изготавливаться.name.text, изготавливаться);

export { изготавливаться };