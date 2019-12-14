import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетянуться: PerfectVerb = {
  name: Word('перетянуться', 7),
  singular1stPerson: Word('перетянусь', 7),
  singular2ndPerson: Word('перетянешься', 5),
  singular3rdPerson: Word('перетянется', 5),
  plural1stPerson: Word('перетянемся', 5),
  plural2ndPerson: Word('перетянетесь', 5),
  plural3rdPerson: Word('перетянутся', 5),
  masculinePast: Word('перетянулся', 7),
  femininePast: Word('перетянулась', 7),
  neuterPast: Word('перетянулось', 7),
  pluralPast: Word('перетянулись', 7),
  imperativeInformal: Word('перетянись', 7),
  imperativeFormal: Word('перетянитесь', 7),
  imperfect: [],
};

perfectVerbs.set(перетянуться.name.text, перетянуться);

export { перетянуться };