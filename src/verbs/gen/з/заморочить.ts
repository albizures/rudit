import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заморочить: PerfectVerb = {
  name: Word('заморочить', 5),
  singular1stPerson: Word('заморочу', 5),
  singular2ndPerson: Word('заморочишь', 5),
  singular3rdPerson: Word('заморочит', 5),
  plural1stPerson: Word('заморочим', 5),
  plural2ndPerson: Word('заморочите', 5),
  plural3rdPerson: Word('заморочат', 5),
  masculinePast: Word('заморочил', 5),
  femininePast: Word('заморочила', 5),
  neuterPast: Word('заморочило', 5),
  pluralPast: Word('заморочили', 5),
  imperativeInformal: Word('заморочь', 5),
  imperativeFormal: Word('заморочьте', 5),
  imperfect: [],
};

perfectVerbs.set(заморочить.name.text, заморочить);

export { заморочить };