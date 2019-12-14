import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const деваться: PerfectVerb = {
  name: Word('деваться', 3),
  singular1stPerson: Word('деваюсь', 3),
  singular2ndPerson: Word('деваешься', 3),
  singular3rdPerson: Word('девается', 3),
  plural1stPerson: Word('деваемся', 3),
  plural2ndPerson: Word('деваетесь', 3),
  plural3rdPerson: Word('деваются', 3),
  masculinePast: Word('девался', 3),
  femininePast: Word('девалась', 3),
  neuterPast: Word('девалось', 3),
  pluralPast: Word('девались', 3),
  imperativeInformal: Word('девайся', 3),
  imperativeFormal: Word('девайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(деваться.name.text, деваться);

export { деваться };