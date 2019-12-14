import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемазаться: PerfectVerb = {
  name: Word('перемазаться', 5),
  singular1stPerson: Word('перемажусь', 5),
  singular2ndPerson: Word('перемажешься', 5),
  singular3rdPerson: Word('перемажется', 5),
  plural1stPerson: Word('перемажемся', 5),
  plural2ndPerson: Word('перемажетесь', 5),
  plural3rdPerson: Word('перемажутся', 5),
  masculinePast: Word('перемазался', 5),
  femininePast: Word('перемазалась', 5),
  neuterPast: Word('перемазалось', 5),
  pluralPast: Word('перемазались', 5),
  imperativeInformal: Word('перемажься', 5),
  imperativeFormal: Word('перемажьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перемазаться.name.text, перемазаться);

export { перемазаться };