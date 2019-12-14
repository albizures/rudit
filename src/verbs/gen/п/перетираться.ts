import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетираться: PerfectVerb = {
  name: Word('перетираться', 7),
  singular1stPerson: Word('перетираюсь', 7),
  singular2ndPerson: Word('перетираешься', 7),
  singular3rdPerson: Word('перетирается', 7),
  plural1stPerson: Word('перетираемся', 7),
  plural2ndPerson: Word('перетираетесь', 7),
  plural3rdPerson: Word('перетираются', 7),
  masculinePast: Word('перетирался', 7),
  femininePast: Word('перетиралась', 7),
  neuterPast: Word('перетиралось', 7),
  pluralPast: Word('перетирались', 7),
  imperativeInformal: Word('перетирайся', 7),
  imperativeFormal: Word('перетирайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перетираться.name.text, перетираться);

export { перетираться };