import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нивелироваться: PerfectVerb = {
  name: Word('нивелироваться', 5),
  singular1stPerson: Word('нивелируюсь', 5),
  singular2ndPerson: Word('нивелируешься', 5),
  singular3rdPerson: Word('нивелируется', 5),
  plural1stPerson: Word('нивелируемся', 5),
  plural2ndPerson: Word('нивелируетесь', 5),
  plural3rdPerson: Word('нивелируются', 5),
  masculinePast: Word('нивелировался', 5),
  femininePast: Word('нивелировалась', 5),
  neuterPast: Word('нивелировалось', 5),
  pluralPast: Word('нивелировались', 5),
  imperativeInformal: Word('нивелируйся', 5),
  imperativeFormal: Word('нивелируйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(нивелироваться.name.text, нивелироваться);

export { нивелироваться };