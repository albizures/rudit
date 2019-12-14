import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нализаться: PerfectVerb = {
  name: Word('нализаться', 5),
  singular1stPerson: Word('налижусь', 5),
  singular2ndPerson: Word('налижешься', 3),
  singular3rdPerson: Word('налижется', 3),
  plural1stPerson: Word('налижемся', 3),
  plural2ndPerson: Word('налижетесь', 3),
  plural3rdPerson: Word('налижутся', 3),
  masculinePast: Word('нализался', 5),
  femininePast: Word('нализалась', 5),
  neuterPast: Word('нализалось', 5),
  pluralPast: Word('нализались', 5),
  imperativeInformal: Word('налижись', 5),
  imperativeFormal: Word('налижитесь', 5),
  imperfect: [],
};

perfectVerbs.set(нализаться.name.text, нализаться);

export { нализаться };