import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемежаться: PerfectVerb = {
  name: Word('перемежаться', 7),
  singular1stPerson: Word('перемежаюсь', 7),
  singular2ndPerson: Word('перемежаешься', 7),
  singular3rdPerson: Word('перемежается', 7),
  plural1stPerson: Word('перемежаемся', 7),
  plural2ndPerson: Word('перемежаетесь', 7),
  plural3rdPerson: Word('перемежаются', 7),
  masculinePast: Word('перемежался', 7),
  femininePast: Word('перемежалась', 7),
  neuterPast: Word('перемежалось', 7),
  pluralPast: Word('перемежались', 7),
  imperativeInformal: Word('перемежайся', 7),
  imperativeFormal: Word('перемежайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перемежаться.name.text, перемежаться);

export { перемежаться };