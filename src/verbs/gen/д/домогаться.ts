import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const домогаться: PerfectVerb = {
  name: Word('домогаться', 5),
  singular1stPerson: Word('домогаюсь', 5),
  singular2ndPerson: Word('домогаешься', 5),
  singular3rdPerson: Word('домогается', 5),
  plural1stPerson: Word('домогаемся', 5),
  plural2ndPerson: Word('домогаетесь', 5),
  plural3rdPerson: Word('домогаются', 5),
  masculinePast: Word('домогался', 5),
  femininePast: Word('домогалась', 5),
  neuterPast: Word('домогалось', 5),
  pluralPast: Word('домогались', 5),
  imperativeInformal: Word('домогайся', 5),
  imperativeFormal: Word('домогайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(домогаться.name.text, домогаться);

export { домогаться };