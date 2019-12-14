import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заколыхаться: PerfectVerb = {
  name: Word('заколыхаться', 7),
  singular1stPerson: Word('заколышусь', 5),
  singular2ndPerson: Word('заколышешься', 5),
  singular3rdPerson: Word('заколышется', 5),
  plural1stPerson: Word('заколышемся', 5),
  plural2ndPerson: Word('заколышетесь', 5),
  plural3rdPerson: Word('заколышутся', 5),
  masculinePast: Word('заколыхался', 7),
  femininePast: Word('заколыхалась', 7),
  neuterPast: Word('заколыхалось', 7),
  pluralPast: Word('заколыхались', 7),
  imperativeInformal: Word('заколышься', 5),
  imperativeFormal: Word('заколышьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заколыхаться.name.text, заколыхаться);

export { заколыхаться };